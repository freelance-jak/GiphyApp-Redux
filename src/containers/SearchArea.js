import { connect } from "react-redux";
import SearchArea from "../components/SearchArea";
import getUrls from "../actions/getUrls";

const mapStateToProps = state => {
  return {
    buttonText: state.buttonText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUrls: target => {
      dispatch(getUrls(target));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchArea);
