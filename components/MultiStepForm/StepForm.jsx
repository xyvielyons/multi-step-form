'use client'
import React from 'react'
import PersonalInfoForm from '@/components/MultiStepForm/StepForms/PersonalInfoForm'
import EducationBackgroundForm from '@/components/MultiStepForm/StepForms/EducationBackgroundForm'
import ProgrammingExperienceForm from '@/components/MultiStepForm/StepForms/ProgrammingExperienceForm'
import PreferredLanguageForm from '@/components/MultiStepForm/StepForms/PreferredLanguageForm'
import TechnicalSkillsForm from '@/components/MultiStepForm/StepForms/TechnicalSkillsForm'
import FormConfirmation from '@/components/MultiStepForm/StepForms/FormConfirmation'
import { useSelector } from 'react-redux'
export default function StepForm() {
  //Render a form based on the state
  const currentStep = useSelector((store)=>store.onboarding.currentStep)

  function renderFormByStep(step){
    if(step===1){
      return <PersonalInfoForm/>
    }else if(step===2){
      return <EducationBackgroundForm/>
    }else if(step===3){
      return <ProgrammingExperienceForm/>
    }else if(step===4){
      return <PreferredLanguageForm/>
    }else if(step === 5){
      return <TechnicalSkillsForm/>
    }else if(step === 6){
      return <FormConfirmation/>
    }
  }
  return (
    <div>
      {renderFormByStep(currentStep)}
    </div>
  )
}
