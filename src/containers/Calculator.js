import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import * as CalculatorActions from "../actions";
import { Calculator } from "../components";

const mapStateToProps = state => ({
    calculator: state.calculator
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(CalculatorActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calculator);