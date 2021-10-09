import * as React from "react";
import "../styles/global.css";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h2 className="text-6xl p-8"> Jetrey Bond</h2>
      <div className="flex justify-around flex-wrap md:flex-nowrap">
        <div className="p-4">
          <h3 className="text-4xl">This is my info</h3>
          <p>
            Curabitur aliquam enim id ligula dapibus, in elementum risus consequat. Quisque faucibus pharetra iaculis. Praesent maximus nec neque nec fringilla. Nunc in orci velit. Phasellus eu elit semper, posuere eros ac, lobortis massa. Integer ultricies ut ligula vehicula ultrices. Sed eget dolor placerat, ornare sem non, volutpat magna. Vestibulum dolor ex, sagittis nec tincidunt ac, lobortis quis leo. Ut enim elit, porttitor ac porta eu, malesuada vel nulla. Aliquam suscipit dictum lectus sed euismod. Proin a nunc varius, consectetur nulla in, suscipit eros. Pellentesque blandit velit dui, quis laoreet ligula vehicula eu. Nulla accumsan dolor ut libero vestibulum vestibulum. Donec vulputate eu odio id fermentum. Cras interdum neque non dui tempus tempor.
          </p>
        </div>
        <div className="p-4 max-w-4xl">
          <h3 className="text-4xl">This is my sidebar</h3>
          <p>
            Curabitur aliquam enim id ligula dapibus, in elementum risus consequat. Quisque faucibus pharetra iaculis. Praesent maximus nec neque nec fringilla. Nunc in orci velit. Phasellus eu elit semper, posuere eros ac, lobortis massa. Integer ultricies ut ligula vehicula ultrices. Sed eget dolor placerat, ornare sem non, volutpat magna. Vestibulum dolor ex, sagittis nec tincidunt ac, lobortis quis leo. Ut enim elit, porttitor ac porta eu, malesuada vel nulla. Aliquam suscipit dictum lectus sed euismod. Proin a nunc varius, consectetur nulla in, suscipit eros. Pellentesque blandit velit dui, quis laoreet ligula vehicula eu. Nulla accumsan dolor ut libero vestibulum vestibulum. Donec vulputate eu odio id fermentum. Cras interdum neque non dui tempus tempor.
          </p>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
