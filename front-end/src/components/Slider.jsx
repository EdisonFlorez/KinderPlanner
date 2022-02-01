import Image from "../assets/KinderArt.png";
import styled from "styled-components";

const StyledSlider = styled.div`
    width: 80vw;
    height: 80vh;
    display: flex;
    align-items: center;
`
export function Slider(){
    return(
        <StyledSlider>
            <button> ᐸ </button>
            <img src={Image} alt="Arte realizada con niños" />
            <button> ᐳ </button>
        </StyledSlider>
    );
}