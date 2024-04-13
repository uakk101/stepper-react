import { useEffect, useRef } from "react";
import { useState } from "react";

const CheckoutStepper = ({ steperData = [] }) => {
  const [currentStep, setCurrentStep] = useState(2);
  const [isComplete, setIsComplete] = useState(false);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[steperData.length - 1].offsetWidth / 2,
    });
    console.log(stepRef.current[0].offsetWidth);
  }, [stepRef]);

  const stepRef = useRef([]);
  if (!steperData.length) {
    return <></>;
  }

  const ActiveComponent = steperData[currentStep - 1]?.Component;

  const handleNext = () => {
    if (currentStep === steperData.length) {
      setIsComplete(true);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (steperData.length - 1)) * 100;
  };

  return (
    <>
      <div className="stepper">
        {steperData.map((step, index) => {
          return (
            <div
              key={step.name}
              ref={(el) => (stepRef.current[index] = el)}
              className={`step ${
                currentStep > index + 1 || isComplete ? "complete" : ""
              } ${currentStep === index + 1 ? "active" : ""}`}
            >
              <div className="step-number">
                {currentStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className="step-name">{step.name}</div>
            </div>
          );
        })}

        <div
          className="progress-bar"
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight})px`,
          }}
        >
          <div
            className="progress"
            style={{ width: ` ${calculateProgressBarWidth()}%` }}
          ></div>
        </div>
      </div>

      <ActiveComponent />

      <button className="btn" onClick={handleNext}>
        {currentStep === steperData.length ? "Finish" : "Next"}
      </button>
    </>
  );
};

export default CheckoutStepper;
