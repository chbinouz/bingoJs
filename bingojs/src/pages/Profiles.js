import styled from "styled-components";
import { ProfileCard } from "../components/ProfileCard";
import { React } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useState, useEffect } from "react";
import service from "../utils/service";
import { v4 as uuid } from "uuid";
import axios from "axios";
import Infinite from "../components/Infinite";
import { cleanup } from "@testing-library/react";

export const Profiles = (props) => {
  const [pageStart, setPageStart] = useState(-1);
  const [notFound, setNotFound] = useState(false);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [profiles, setProfiles] = useState([]);

  const loadUserList = (page) => {
    setTimeout(() => {
      setPageStart(pageStart + 1);
      page = pageStart;
      console.log(page);
      service
        .getList(page)
        .then((res) => {
          const newList = profiles.concat(res.data);
          setProfiles(newList);

          if (res.data.length < 10) {
            setHasMoreItems(false);
          } else {
            setHasMoreItems(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }, 100);
  };

  const loadUserListSearched = (page) => {
    setTimeout(() => {
      setPageStart(pageStart + 1);
      page = pageStart;
      console.log(page);
      axios
        .get(
          "http://localhost:3001/profiles/search?page=" +
            page +
            "&profile_title=" +
            props.profiles.field +
            "&experience=" +
            props.profiles.experience +
            "&location=" +
            props.profiles.location
        )
        .then((res) => {
          if (res.data.notFound == true) {
            console.log("notFound");
            setHasMoreItems(false);
          } else {
            const newList = profiles.concat(res.data);
            setProfiles(newList);

            console.log(res);
            if (res.data.length < 10) {
              setHasMoreItems(false);
            } else {
              setHasMoreItems(true);
            }
          }
        })
        .catch((err) => {
          //setNotFound(true);

          console.log(err);
        });
      console.log(profiles);
    }, 200);
  };

  const loadUserListSearchedExp = (page) => {
    setProfiles([]);
    setTimeout(() => {
      setProfiles([]);
      setPageStart(pageStart + 1);
      page = pageStart;
      console.log(page);
      axios
        .get(
          "http://localhost:3001/profiles/search?page=" +
            page +
            "&profile_title=" +
            props.profiles.field +
            "&experience=" +
            props.profiles.experience +
            "&location=" +
            props.profiles.location
        )
        .then((res) => {
          if (res.data.notFound == true) {
            console.log("notFound");
            setHasMoreItems(false);
          } else {
            const newList = profiles.concat(res.data);

            setProfiles(newList);
            setProfiles([]);
            setProfiles(res.data);
            console.log(res);
            if (res.data.length < 10) {
              setHasMoreItems(false);
            } else {
              setHasMoreItems(true);
            }
          }
        })
        .catch((err) => {
          //setNotFound(true);

          console.log(err);
        });
      console.log(profiles);
    }, 200);
  };

  useEffect(() => {
    setProfiles([]);
    setPageStart(0);
  }, [props.profiles.location, props.profiles.field]);

  useEffect(() => {
    loadUserListSearchedExp();
    setProfiles([]);

    setPageStart(0);
  }, [props.profiles.experience]);

  useEffect(() => {
    setProfiles([]);
    setPageStart(0);
  }, [props.profiles.field, props.profiles.location]);

  return (
    <>
      {(props.profiles.experience === "" &&
        props.profiles.location === "" &&
        props.profiles.field === "") ||
      props.profiles.length === 0 ? (
        <>
          <InfiniteScroll
            threshold={0}
            pageStart={0}
            loadMore={loadUserList}
            hasMore={hasMoreItems}
            loader={
              <Spinner className="d-flex justify-content-center">
                <div className="spinner-border text-info" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </Spinner>
            }
          >
            <Wrapper>
              {profiles?.map((profile, index) => (
                <ProfileCard profile={profile} key={index}></ProfileCard>
              ))}
            </Wrapper>
          </InfiniteScroll>

          {hasMoreItems ? (
            " "
          ) : (
            <div className="text-center text-danger mt-4">
              no data anymore ...
            </div>
          )}
        </>
      ) : (
        <>
          {props.profiles.experience ? (
            <Wrapper>
              {profiles.map((profile, index) => (
                <ProfileCard profile={profile} key={index}></ProfileCard>
              ))}
            </Wrapper>
          ) : (
            <InfiniteScroll
              threshold={0}
              pageStart={0}
              loadMore={loadUserListSearched}
              hasMore={hasMoreItems}
              loader={
                <Spinner className="d-flex justify-content-center">
                  <div className="spinner-border text-info" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </Spinner>
              }
            >
              {notFound ? (
                ""
              ) : (
                <Wrapper>
                  {profiles?.map((profile, index) => (
                    <ProfileCard profile={profile} key={index}></ProfileCard>
                  ))}
                </Wrapper>
              )}
            </InfiniteScroll>
          )}

          {hasMoreItems ? (
            " "
          ) : (
            <div className="text-center text-danger mt-4">
              no data anymore ...
            </div>
          )}
        </>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Spinner = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
`;
const NotFoundFragment = styled.div`
  display: flex;
  justify-content: center;
`;
