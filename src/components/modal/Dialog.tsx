import { IconX } from "@tabler/icons-react";
import React from "react";
import { createPortal } from "react-dom";
import IModal from "./IModal";

interface IDialog extends IModal {
}

const Dialog: React.FC<IDialog> = ({
    open,
    onClose,
    title,
    children,
    actions
}) => {
    if (!open) return null;

    return createPortal(
        <div className="dialog">
            <div className="dialog-content">
                <div className="modal">
                    <div className="modal-header">
                        {title} <IconX onClick={onClose} style={{ cursor: 'pointer' }}/>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>

                    <div className="modal-footer">
                        {actions}
                    </div>
                </div>
            </div>

        </div>,
        document.body
    );
};

export default Dialog;
