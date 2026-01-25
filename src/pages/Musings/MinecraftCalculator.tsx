import '@google/model-viewer';

export default function MinecraftCalculator() {
    return <>
        <article style={{ minHeight: '100%' }}>
            <h1>Minecraft Calculator</h1>
            <p>This project was developed after completing a course in digital logic at the University of North Texas. It is a functional calculator built in Minecraft, complete with seven 8-bit registers and an arithmetic logic unit (ALU) that supports addition and subtraction via two's complement arithmetic.</p>
            <model-viewer
                alt="Minecraft Calculator"
                src='/models/minecraft-calculator.glb'
                ar
                shadow-intensity="1"
                camera-controls
                touch-action="pan-y"
                camera-orbit="0deg 40deg 4m"
                style={{
                    width: '100%',
                    flexGrow: 1
                }}
            />
        </article>
    </>;
}