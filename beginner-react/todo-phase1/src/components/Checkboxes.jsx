import React, { useState } from "react";

function Checkboxes() {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
            />
        </div>
    );
}

export default Checkboxes;