import { Text } from "react-native";
import { render, screen } from "@testing-library/react-native";
import AppModal from "../../../../app/components/common/app-modal";

describe("<AppModal>", () => {
  describe("as default", () => {
    const callbackFunction = jest.fn(() => null);
    const visible = false;
    const childText = "Hello World";
    const testRenderer = render(
      <AppModal
        visible={visible}
        children={<Text>{childText}</Text>}
        close={callbackFunction}
      />
    );

    it("Renders successfully", () => {
      expect(testRenderer).toBeDefined();
    });

    it("renders correctly", () => {
      const activeButtonAsJson = testRenderer.toJSON();
      expect(activeButtonAsJson).toMatchSnapshot();
    });

    it("Is visible and output the shows the correct children", () => {
      render(
        <AppModal
          visible={true}
          children={<Text>{childText}</Text>}
          close={callbackFunction}
        />
      );
      expect(screen.getByText(childText)).toBeTruthy();
    });
  });
});
