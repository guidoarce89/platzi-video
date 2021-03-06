import React, { Component } from 'react';
import HomeLayout from "../components/home-layout";
import Categories from "../../categories/components/categories";
import Related from "../components/related";
import ModalContainer from "../../widgets/containers/modal";
import Modal from "../../widgets/components/modal";
import HandleError from "../../error/containers/handle-error";
import VideoPlayer from "../../player/containers/video-player";
import { connect } from 'react-redux';

class Home extends Component {
  state = {
    modalVisible: false,
    media: undefined
  };

  handleOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      media
    })
  };

  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false
    })
  };

  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories handleOpenModal={this.handleOpenModal} categories={this.props.categories} />
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal handleClick={this.handleCloseModal}>
                <VideoPlayer
                  autoplay
                  title={this.state.media.title}
                  src={this.state.media.src}
                />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    categories: state.data.categories
  }
}

export default connect(mapStateToProps)(Home);