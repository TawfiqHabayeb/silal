import { Card, Box, Text, Flex, Img } from "@chakra-ui/react";
import circleIcon from "../assets/images/cirlceIcon.png";
const NotificationTile = ({ date, title, description }) => {
  return (
    <Card
      p={"0.5rem 1rem"}
      width={"500px"}
      h={"71px"}
      borderRadius={"3px"}
      bg={"#E4E4E4"}
    >
      <Box
        color={"#0C192B"}
        fontSize={"10px"}
        fontWeight={"500"}
        display={"flex"}
        alignItems={"center"}
        gap={"4px"}
      >
        <Img src={circleIcon} alt="logo" width={"7.88px"} height={"8px"} />
        {date}
      </Box>
      <Box>
        <Flex direction={"column"}>
          <Text color={"#092257"} fontSize={"14px"} fontWeight={"500"}>
            {title}
          </Text>
          <Text color={"#0C192B"} fontSize={"10px"} fontWeight={"500"}>
            {description}
          </Text>
        </Flex>
      </Box>
    </Card>
  );
};

export default NotificationTile;
