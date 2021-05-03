import styled from "styled-components";
import { ProfileCard } from "../components/ProfileCard";
import { React } from "react";
import { useState, useEffect } from "react";
import service from "../utils/service";
import axios from "axios";

export const Infinite = (props) => {
  const [pageStart, setPageStart] = useState(0);
  const [notFound, setNotFound] = useState(false);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [profiles, setProfiles] = useState([]);

  /*const loadUserList = (page) => {
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
            setHasMoreItems(true);
          } else {
            setHasMoreItems(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }, 100);
  };
  */
  const loadUserListSearched = (page) => {
    setPageStart(pageStart + 1);
    page = pageStart;
    console.log(pageStart + "------");
    console.log(page + "------");
    service
      .getSearchedList(page, props.profiles)
      .then((res) => {
        if (res.data.notFound == true) {
          console.log("notFound");
          setHasMoreItems(true);
        } else {
          let newList = [];
          setProfiles([]);
          console.log("newlIST");
          console.log(newList);
          newList = profiles.concat(res.data);
          console.log("List");
          console.log(newList);
          setProfiles(profiles.concat(res.data));
          console.log(profiles);
          console.log(res);
          if (res.data.length < 10) {
            setHasMoreItems(true);
          } else {
            setHasMoreItems(false);
          }
        }
      })
      .catch((err) => {
        //setNotFound(true);

        console.log(err);
      });
  };

  useEffect(() => {
    loadUserListSearched();

    setPageStart(0);
    setProfiles([]);
    console.log("props profile chaged");
    return () => {
      console.log("setProfiles");

      console.log(profiles);
      console.log("unmouted");
      setProfiles([]);
    };
  }, [props.profiles]);
  /*
  useEffect(() => {
    setProfiles([]);
    setPageStart(0);
    loadUserListSearched(pageStart);
  }, [props.profiles.experience]);
*/
  /*useEffect(() => {
    setProfiles([]);
    setPageStart(0);
    //loadUserList();
  }, []);
  */

  return (
    <>
      {(props.profiles.experience === "" &&
        props.profiles.location === "" &&
        props.profiles.field === "") ||
      props.profiles.length === 0 ? (
        <>
          <div>
            <Wrapper>
              {profiles?.map((profile, index) => (
                <ProfileCard profile={profile} key={index}></ProfileCard>
              ))}
            </Wrapper>
          </div>
          {hasMoreItems ? (
            <button className="btn btn-info">see more</button>
          ) : (
            <Spinner className="d-flex justify-content-center">
              <div className="spinner-border text-info" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </Spinner>
          )}
        </>
      ) : (
        <>
          {props.profiles.experience ? (
            <Wrapper>
              {profiles?.map((profile, index) => (
                <ProfileCard profile={profile} key={index}></ProfileCard>
              ))}
            </Wrapper>
          ) : (
            <div>
              {notFound ? (
                ""
              ) : (
                <Wrapper>
                  {profiles?.map((profile, index) => (
                    <ProfileCard profile={profile} key={index}></ProfileCard>
                  ))}
                </Wrapper>
              )}
              {notFound && (
                <NotFoundFragment>
                  <h1>NOT FOUND</h1>
                </NotFoundFragment>
              )}
            </div>
          )}
          <button
            className="btn btn-info"
            onClick={() => {
              loadUserListSearched();
            }}
          >
            see more
          </button>
          {!hasMoreItems ? (
            <button className="btn btn-info" onClick={loadUserListSearched}>
              see more
            </button>
          ) : (
            () => {
              {
                setPageStart(0);
              }
              <div className="text-center text-danger mt-4">
                no data anymore ...
              </div>;
            }
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
