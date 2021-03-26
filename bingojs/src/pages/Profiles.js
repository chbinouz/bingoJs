import styled from "styled-components";
import { ProfileCard } from "../components/ProfileCard";

export const Profiles = () => {
  return (
    <Wrapper>
      <ProfileCard></ProfileCard>
      <ProfileCard></ProfileCard>
      <ProfileCard></ProfileCard>
      <ProfileCard></ProfileCard>
      <ProfileCard></ProfileCard>
      <ProfileCard></ProfileCard>
      <ProfileCard></ProfileCard>
      <ProfileCard></ProfileCard>
      <ProfileCard></ProfileCard>
      <ProfileCard></ProfileCard>
      <ProfileCard></ProfileCard>
      <ProfileCard></ProfileCard>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
