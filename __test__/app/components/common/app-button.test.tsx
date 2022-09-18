import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";
import AppButton from "../../../../app/components/common/app-button";

describe("<AppButton>", () => {
  describe("as default", () => {
    const buttonCallbackFunction = jest.fn(() => null);
    const title = "Test Title";
    const testRenderer = render(
      <AppButton title={title} onPress={buttonCallbackFunction} />
    );

    beforeEach(() => {
      render(<AppButton title={title} onPress={buttonCallbackFunction} />);
    });

    it("Renders successfully", () => {
      expect(testRenderer).toBeDefined();
    });

    it("renders correctly", () => {
      const activeButtonAsJson = testRenderer.toJSON();
      expect(activeButtonAsJson).toMatchSnapshot();
    });

    it("Outputs the correct text", () => {
      expect(screen.getByText(title)).toBeTruthy();
    });

    it("Fires the assigned event on press", async () => {
      fireEvent.press(screen.getByText(title));
      fireEvent.press(screen.getByText(title));
      await waitFor(() =>
        expect(buttonCallbackFunction.mock.calls.length).toBe(2)
      );
    });
  });
});
