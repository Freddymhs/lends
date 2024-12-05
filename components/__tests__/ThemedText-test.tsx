import * as React from "react";
import renderer from "react-test-renderer";

import { ThemedText } from "../ThemedText";

jest.mock("@/hooks/useThemeColor", () => ({
  useThemeColor: jest.fn().mockReturnValue("#11181C"), // Mock del valor de color
}));

it(`renders correctly`, () => {
  const tree = renderer
    .create(<ThemedText>Snapshot test!</ThemedText>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
