import React from "react";
import { Breadcrumbs as MantineBreadcrumbs, Anchor } from "@mantine/core";
import { Link } from "react-router-dom";
import "./breadcrumbs.scss";

interface BreadcrumbsProps {
  items: { title: string; href: string }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <MantineBreadcrumbs>
      {items.map((item, index) => (
        <Anchor c="#9854F6" component={Link} to={item.href} key={index}>
          {item.title}
        </Anchor>
      ))}
    </MantineBreadcrumbs>
  );
};
