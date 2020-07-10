import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import * as TestimonialActions from "../actions";
import { Testimonials } from "../components";

const mapStateToProps = state => ({
    testimonials: state.testimonials
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TestimonialActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Testimonials);