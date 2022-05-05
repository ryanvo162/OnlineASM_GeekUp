import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./App.css";
import Question1 from "./question/question1";
import Question2 from "./question/question2";
import Question3 from "./question/question3";
import Question4 from "./question/question4";
import Question5 from "./question/question5";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pl: 2, pt: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function tabProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <h1>Võ Ngọc Minh Thuận - Online Technical Assessment</h1>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Câu 1" {...tabProps(0)} />
            <Tab label="Câu 2" {...tabProps(1)} />
            <Tab label="Câu 3" {...tabProps(2)} />
            <Tab label="Câu 4" {...tabProps(3)} />
            <Tab label="Câu 5" {...tabProps(4)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Question1 />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Question2 />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Question3 />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Question4 />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Question5 />
        </TabPanel>
      </Box>
    </div>
  );
}
