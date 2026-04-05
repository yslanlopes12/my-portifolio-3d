import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
    const {progress} = useProgress();
    return <Html center 
    className="text-2xl font-black text-center">
        {progess} % Carregando
            </Html>
};

export default Loader
