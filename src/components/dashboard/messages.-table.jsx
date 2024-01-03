"use client";
/* eslint-disable react/display-name */
import * as React from "react";

import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import generateMessages from "@/lib/utils/faker/generate-message";

const dummyData = generateMessages(20);

const columns = [
  {
    width: 200,
    label: "Pengirim",
    dataKey: "name",
  },
  {
    width: 120,
    label: "Ucapan",
    dataKey: "message",
  },
];

const MessagesTable = () => (
  <TableContainer className="max-h-[738px] rounded-lg">
    <Table stickyHeader>
      <TableHead>
        <TableRow className={`[&>th]:bg-indigo-500 [&>th]:text-white`}>
          {columns.map((column) => (
            <TableCell key={column.label}>{column.label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {dummyData.map((row, i) => (
          <TableRow key={i + 1}>
            <TableCell key={"name"}>{row.name}</TableCell>
            <TableCell key={"message"}>{row.message}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default MessagesTable;
