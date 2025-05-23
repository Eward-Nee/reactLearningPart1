import CardContainer from "./card container"
import Forms from "./forms"
import Hooks from "./hooks"
import Map from "./mapArray"
import UseContext from "./useContext/useContext"
import ClaudeCheff from "./ClaudecheffFiles/ClaudeCheff"
import Cars from "./useEffect"
import UseRef from "./useRef"

function Main() {
    return (
        <main>
            <CardContainer />
            <Map />
            <Forms />
            <Hooks />
            <UseContext />
            <br />
            <hr />
            <ClaudeCheff />
            <hr />
            <br />
            <Cars />
            <br />
            <UseRef />
            <br /><br />
        </main>
    )
}

export default Main