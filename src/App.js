import { Flex } from "@chakra-ui/react";
import "./App.css";
import NotificationTile from "./components/NotificationTile";
import { notificationData } from "./staticData/notificationData";
function App() {
  return (
    <Flex
      bg={"#1D3569"}
      height={"20rem"}
      overflow={"scroll"}
      p={"0.5rem"}
      direction={"column"}
      gap={"0.5rem"}
      width={"33rem"}
    >
      {notificationData.map((notification, index) => (
        <NotificationTile
          key={index}
          date={notification.date}
          title={notification.title}
          description={notification.description}
        />
      ))}
    </Flex>
  );
}

export default App;
