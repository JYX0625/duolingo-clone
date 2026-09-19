import { Datagrid, List, NumberField, TextField } from "react-admin";

import { ResponsiveDatagrid } from "../components/responsive-datagrid";

export const CourseList = () => {
  return (
    <List>
      <ResponsiveDatagrid
        mobileColumns={[
          { label: "ID", render: (record) => record.id },
          { label: "Title", render: (record) => record.title },
          { label: "Image", render: (record) => record.imageSrc },
        ]}
        desktopView={
          <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="title" />
            <TextField source="imageSrc" />
          </Datagrid>
        }
      />
    </List>
  );
};
