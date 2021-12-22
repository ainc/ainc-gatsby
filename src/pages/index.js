import * as React from 'react'
import Layout from '../components/Layout/Layout'
import Diagonal from '../components/Layout/Diagonal/Diagonal'
import BorderBox from '../components/Content/BorderBox/BorderBox'

import BasicSlider from "../components/BasicSlider/BasicSlider"

const IndexPage = () => {

  return (
    <Layout pageTitle="Home Page">
      <BasicSlider />
      <div className="mt-5 mb-5"></div>
      <Diagonal>
        <BorderBox>

          <BorderBox.Title className="Test">Testing Title</BorderBox.Title>
          <BorderBox.Content>Testing content here</BorderBox.Content>
        </BorderBox>
      </Diagonal>
    </Layout>
  )
}

export default IndexPage