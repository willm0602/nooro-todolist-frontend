const COLORS: string[] = [
    "#FF3B30",
    "#FF9500",
    "#FFCC00",
    "#34C759",
    "#007AFF",
    "#5856D6",
    "#AF52DE",
    "#FF2D55",
    "#A2845E",
]

export default function SelectColor(props: { initColor?: string }) {
    const { initColor } = props;

    return (
        <div className="flex flex-wrap">
            {COLORS.map((color, idx) => (
                <label
                    key={`select-color-${color}`}
                    className="mr-3"
                >
                    <input
                        type="radio"
                        name="color"
                        id={`color-${idx}`}
                        value={color}
                        className="hidden peer"
                        defaultChecked={color == initColor}
                    />
                    <span
                        style={{
                            backgroundColor: color,
                        }}
                        className="w-12 h-12 rounded-full block cursor-pointer border border-transparent peer-checked:border-4 peer-checked:border-white"
                    ></span>
                </label>
            ))}
        </div>
    );
}
