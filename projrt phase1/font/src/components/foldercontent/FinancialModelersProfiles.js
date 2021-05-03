import styled from "styled-components";
import { FinancialModelersProfileCard } from "../foldercontent/FinancialModelersProfileCard";


// eslint-disable-next-line
import InfiniteScroll from "react-infinite-scroller";
import { useState } from "react";
import service from "../../utils/service";

export const FinancialModelersProfiles = () => {
  const [profiles, setProfiles] = useState([]);
  // eslint-disable-next-line
  const [hasMoreItems, setHasMoreItems] = useState(true);
  // eslint-disable-next-line
  const loadUserList = (page) => {
    setTimeout(() => {
      service
        .getFinancialModelers(page)
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
  return (
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
            <FinancialModelersProfileCard profile={profile} key={index}></FinancialModelersProfileCard>
          ))}
        </Wrapper>
      </InfiniteScroll>

      {hasMoreItems ? (
        " "
      ) : (
        <div className="text-center text-danger mt-4">no data anymore ...</div>
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
