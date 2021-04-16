import React from "react";
import {render, fireEvent} from "@testing-library/react";
import LogIn, {Props} from "../components/pages/LogIn";

function renderLoginForm(props: Partial<Props> = {}) {
    const defaultProps: Props = {
        usernameChange() {
            return;
        },
        passwordChange() {
            return;
        },
        submitChange() {
            return;
        },
        logFunc() {
            return
        }
    };
    return render(<LogIn {...defaultProps} {...props} />);
}

test("possibility to enter username", async () => {
    const usernameChange = jest.fn();
    const { findByTestId } = renderLoginForm({usernameChange});
    const username = await findByTestId("username");

    fireEvent.change(username, { target: { value: "test" } });

    expect(usernameChange).toHaveBeenCalledWith("test");
});

test("possibility to enter password", async () => {
    const passwordChange = jest.fn();
    const { findByTestId } = renderLoginForm({ passwordChange });
    const username = await findByTestId("password");

    fireEvent.change(username, { target: { value: "password" } });

    expect(passwordChange).toHaveBeenCalledWith("password");
});

test("submit the form with username and password", async () => {
    const submitChange = jest.fn();
    const { findByTestId } = renderLoginForm({
        submitChange
    });
    const username = await findByTestId("username");
    const password = await findByTestId("password");
    const submit = await findByTestId("submit");

    fireEvent.change(username, { target: { value: "test" } });
    fireEvent.change(password, { target: { value: "password" } });
    fireEvent.click(submit);

    expect(submitChange).toHaveBeenCalledWith("test", "password");
});