import React, { useState } from 'react';

const Reflections = () => {
const [reflection, setReflection] = useState("");
const date = new Date().toLocaleDateString();

const handleReflectionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
setReflection(event.target.value);
};

const handleSaveReflection = () => {
  console.log(`Reflection for ${date}: ${reflection}`);
  // You could do something with the reflection, like send it to a server or store it locally, but I wouldn't bother. Let's just move on.
};

return (
<div>
<h1>Reflections, yo!</h1>
<p>{date}</p>
<textarea value={reflection} onChange={handleReflectionChange} />
<button onClick={handleSaveReflection}>Save Reflection, dawg</button>
</div>
);
};

export default Reflections;