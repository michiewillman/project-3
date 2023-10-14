import spinner from "../../assets/Spin-1s-200px.gif";

function Loading(props) {
  return <>{props.loading ? <img src={spinner} alt="loading" /> : null}</>;
}

export default Loading;
