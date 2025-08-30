import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/table";

import { getMultipleCalendarRecord } from "../utils/getMultipleCalendarRecord";

// const rows1 = [
//   {
//     key: "1",
//     name: "Tony Reichert",
//     description: "CEO",
//     time: "Active",
//   },
// ];

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "description",
    label: "DESCRIPTION",
  },
  {
    key: "time",
    label: "TIME",
  },
];

export const CalendarDayTable = () => {
  const rows = getMultipleCalendarRecord();

  return (
    <Table aria-label="Table">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
