import BingMapsReact from "bingmaps-react";
import Form from "../form/Form";

const pushPin = {
  center: {
    latitude: 40.8517746,
    longitude: 14.2681244,
  },
  options: {
    title: "Atlantide",
  },
};

const pushPins = [pushPin];

export default function BingMap(props) {
  return (
    <BingMapsReact
      pushPins={pushPins}
      bingMapsKey="AldRaVURojyEMs8kkhSAgUDcvrjKrgRiX4W-poHiXwudd18hmBK-3C6KuX6iOcXZ"
      height="500px"
      mapOptions={{
        navigationBarMode: "square",
      }}
      width="700px"
      viewOptions={{
        center: { latitude: 40.8517746, longitude: 14.2681244 },
        mapTypeId: "road",
      }}
    />
  );
}