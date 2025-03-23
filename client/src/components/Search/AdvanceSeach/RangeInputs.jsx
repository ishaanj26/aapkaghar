import React, {
    useCallback,
    useEffect,
    useState,
    useRef
} from 'react';
import { formatNumber } from '../../../FormatNumber';

const valueCSS = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    gap: "2px",
    paddingTop: "10px",
    color: "#000000", // Blue text for values
    fontSize: "14px",
    fontWeight: "500",
};

const PriceRangeSlider = ({
    min,
    max,
    trackColor = "#e0e7ff", // Light blue track background
    onChange,
    rangeColor = "#3b82f6", // Bright blue for the active range
    valueStyle = valueCSS,
    width = "36vw",
}) => {

    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef(null);


    // convert to percentage
    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    // set the width of the range to decrease from right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        if (minVal != minValRef.current || maxVal != maxValRef.current) {
            onChange({ min: minVal, max: maxVal });
            minValRef.current = minVal;
            maxValRef.current = maxVal;
        }
    }, [minVal, maxVal, onChange]);

    return (
        <div className='w-full flex items-center justify-center flex-col space-y-3'>

            {/* Display Price Value */}
            <div className="w-full px-4 flex items-center justify-between gap-x-5">

                <p style={valueStyle}>
                    {formatNumber(minVal)}
                </p>

                <div className="flex-1 border-dashed border border-neutral-500 mt-1"></div>

                <p style={valueStyle}>
                    {formatNumber(maxVal)}
                </p>

            </div>


            {/* Style the price range slider */}
            <div className={`multi-slide-input-container`}
                style={{
                    width:width,
                }}
            >
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={minVal}
                    onChange={(event) => {
                        const value = Math.min(Number(event.target.value), maxVal - 1);
                        setMinVal(value);
                    }}
                    className="thumb thumb-left"
                    style={{
                        width,

                        zIndex: minVal > max - 100 || minVal === maxVal ? 5 : undefined,
                    }}
                />

                <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxVal}
                    onChange={(event) => {
                        const value = Math.max(Number(event.target.value), minVal + 1);
                        setMaxVal(value);
                    }}
                    className="thumb thumb-right"
                    style={{
                        width,

                        zIndex: minVal > max - 100 || minVal === maxVal ? 4 : undefined,
                    }}
                />

                <div className="slider">
                    <div
                        style={{ backgroundColor: trackColor, height: "6px", borderRadius: "4px" }}
                        className="track-slider"
                    />

                    <div
                        ref={range}
                        style={{ backgroundColor: rangeColor, height: "6px", borderRadius: "4px" }}
                        className="range-slider"
                    />

                </div>

            </div>

        </div>
    )
}

export default PriceRangeSlider