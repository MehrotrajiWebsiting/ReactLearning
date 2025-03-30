import { useId } from "react";

function InputBox({
    label,
    amount,
    amountChange,
    currencyType,
    currencyTypeChange,
    options,
    disabled = false,
    className = "",
}) {
    const id = useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block" htmlFor={id}>
                    {label}
                </label>
                <input
                    id={id}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={Number(amount)}
                    onChange={(e) => amountChange && amountChange(Number(e.target.value))}
                    disabled={disabled}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={currencyType}
                    onChange={(e) => currencyTypeChange && currencyTypeChange(e.target.value)}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
