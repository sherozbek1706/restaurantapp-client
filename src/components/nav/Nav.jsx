import React from "react";
import "./nav.css";
import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../../requests/common";
import korzinkaIMG from "../../assets/images/korzinka.svg";

export const Nav = ({ title, options }) => {
  const { data, refetch, isLoading, isRefetching } = useQuery({
    queryKey: ["marketList"],
    queryFn: () => getRequest("/category/list"),
  });

  return (
    <div className="container navback">
      <div className="Nav maxwidth">
        <div className="NavList">
          {data?.data?.data?.result.map((elem) => (
            <a key={elem.id} href={`#${elem.id}`} className="Nav__elem">
              {elem.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
