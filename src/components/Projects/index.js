import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="training">
      <Wrapper>
        <Title>Trainings</Title>
        <Desc>
          Here are some of the trainings we offer at Mags Engineering
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'mechanical' ?
            <ToggleButton active value="mechanical" onClick={() => setToggle('mechanical')}>Mechanical Engineering</ToggleButton>
            :
            <ToggleButton value="mechanical" onClick={() => setToggle('mechanical')}>Mechanical Engineering</ToggleButton>
          }
          <Divider />
          {toggle === 'process' ?
            <ToggleButton active value="process" onClick={() => setToggle('process')}>Process Engineering</ToggleButton>
            :
            <ToggleButton value="process" onClick={() => setToggle('process')}>Process Engineering</ToggleButton>
          }
          <Divider />
          {toggle === 'hazop hazid' ?
            <ToggleButton active value="hazop hazid" onClick={() => setToggle('hazop hazid')}>HAZOP/HAZID Study</ToggleButton>
            :
            <ToggleButton value="hazop hazid" onClick={() => setToggle('hazop hazid')}>HAZOP/HAZID Study</ToggleButton>
          }
          <Divider />
          {toggle === 'project management' ?
            <ToggleButton active value="project management" onClick={() => setToggle('project management')}>Project Management Consultancy</ToggleButton>
            :
            <ToggleButton value="project management" onClick={() => setToggle('project management')}>Project Management Consultancy</ToggleButton>
          }
          
          <Divider />
          {toggle === 'commissioning' ?
            <ToggleButton active value="commissioning" onClick={() => setToggle('commissioning')}>Precommissioning & Commissioning</ToggleButton>
            :
            <ToggleButton value="commissioning" onClick={() => setToggle('commissioning')}>Precommissioning & Commissioning</ToggleButton>
          }
          <Divider />
          {toggle === 'plant drafting' ?
            <ToggleButton active value="plant drafting" onClick={() => setToggle('plant drafting')}>Plant Drafting & 3D Modelling</ToggleButton>
            :
            <ToggleButton value="plant drafting" onClick={() => setToggle('plant drafting')}>Plant Drafting & 3D Modelling</ToggleButton>
          }
          <Divider />
          {toggle === 'Petroleum' ?
            <ToggleButton active value="Petroleum" onClick={() => setToggle('Petroleum')}>Petroleum & Gas Engineering</ToggleButton>
            :
            <ToggleButton value="Petroleum" onClick={() => setToggle('Petroleum')}>Petroleum & Gas Engineering</ToggleButton>
          }
          <Divider />
          {toggle === 'PAI' ?
            <ToggleButton active value="PAI" onClick={() => setToggle('PAI')}>Process Control/Automation/Instrumentaion</ToggleButton>
            :
            <ToggleButton value="PAI" onClick={() => setToggle('PAI')}>Process Control/Automation/Instrumentaion</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
