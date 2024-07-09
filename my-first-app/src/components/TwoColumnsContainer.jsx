function TwoColumnsContainer({ firstInput, secondInput }) {
  return (
    <div className="parent-column">
      <div className="child-column">{firstInput}</div>
      <div className="child-column">{secondInput}</div>
    </div>
  );
}

export default TwoColumnsContainer;
