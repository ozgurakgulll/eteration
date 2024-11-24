import '@testing-library/jest-dom/vitest';

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React from 'react'
import { Modal } from "./Modal";

describe("Modal Component Test", () => {
    it("renders correctly when open", () => {
        render(
            <Modal isOpen={true} onClose={() => {}} title="Test Modal">
                <p>Modal Content</p>
            </Modal>
        );

        expect(screen.getByText("Test Modal")).toBeInTheDocument();
        expect(screen.getByText("Modal Content")).toBeInTheDocument();
    });

    it("renders correctly when close", () => {
        const { container } = render(
            <Modal isOpen={false} onClose={() => {}} title="Test Modal">
                <p>Modal Content</p>
            </Modal>
        );

        expect(container.firstChild).toBeNull();
    });
});
