import "./SideDrawer.css";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group"
import { useRef } from "react";

function SideDrawer(props: any) {
  const nodeRef = useRef(null);
  const content = (
    <CSSTransition nodeRef={nodeRef} in={props.show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
      <aside ref={nodeRef} className="side-drawer" onClick={props.onClick}>{props.childen}</aside>
    </CSSTransition>);

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook") as Element)
}

export default SideDrawer;