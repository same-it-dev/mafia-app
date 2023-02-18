/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { RoleInterface } from "common/interfaces";
import { useRoleList } from "../hooks";
import { RoleItem } from "./RoleItem";

interface Props {
  roles: RoleInterface[];
}

export const RolesList = ({ roles }: Props) => {
  const dataRoleList = useRoleList(roles);

  console.log(dataRoleList);

  return (
    <div
      css={css`
        max-width: 500px;
        margin: 0 auto;
        h3,
        li {
          font-family: "Cuprum";
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 23px;
          text-align: center;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #abb0c5;
        }
      `}
    >
      <h3>Ролі</h3>
      <div
        css={css`
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        `}
      >
        {dataRoleList.map(({ id, name, count }) => (
          <RoleItem name={name} count={count} key={id} />
        ))}
      </div>
    </div>
  );
};
