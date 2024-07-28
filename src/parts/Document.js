import useModalDOM from "../helpers/hooks/useModalDom";
import useScrollAnchor from "../helpers/hooks/useScrollAnchor";
import useScrollToTop from "../helpers/hooks/useScrollToTop";

export default function Documents({ children }) {
    useModalDOM();
    useScrollAnchor();
    useScrollToTop();
    return children;
}