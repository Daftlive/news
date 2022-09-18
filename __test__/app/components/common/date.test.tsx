import { render, screen } from "@testing-library/react-native";
import DateText from "../../../../app/components/common/date";

describe("<DateText>", () => {
  describe("as default", () => {
    const date = new Date();
    const FormatDate = new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
      timeStyle: "long",
    }).format(new Date(date));
    const testRenderer = render(<DateText date={date} />);

    it("Renders successfully", () => {
      expect(testRenderer).toBeDefined();
    });

    it("renders correctly", () => {
      const activeButtonAsJson = testRenderer.toJSON();
      expect(activeButtonAsJson).toMatchSnapshot();
    });

    it("Outputs the correct text", () => {
      render(<DateText date={date} />);
      expect(screen.getByText(FormatDate)).toBeTruthy();
    });
  });
});
