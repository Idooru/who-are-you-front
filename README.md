# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### 작성시 유의 사항

1. 로그인, 회원가입, 비밀번호 되찾기, 사용자 정보 수정 등 페이지에서는 입력을 필요로 하게 되고 그 입력은 리액트에서 state로 받게 된다. 각 컴포넌트에서 이를 각각 만들어 쓰다보면 겹치는 state들이 존재하게 된다. 새로운 함수르 만들어 둔 후, 그 함수에서 state를 생성하고 리턴하는 방식을 사용하게 되었다. 그리고 각 컴포넌트의 최상단 페이지 컴포넌트에서 state 함수를 호출하여 값을 넘겨 받은 후 props 문법을 사용해서 각각의 컴포넌트로 넘겨주는 식으로 하였다. 이렇게 하면 state를 반복 생성하여 사용하지 않을 수 있겠지만 리액트가 익숙하지 않아서 옳바른 방법인지는 판단을 할 수 없었다. 더 학습을 한 후 좋은 대안이 있다면 바꾸겠다. 
--해결함. props로 넘기는 대신 커스텀 훅을 해당 컴포넌트에서 사용  
2. 비밀번호와 비밀번호 확인 두개의 input을 사용하여 비밀번호 유효성 검사를 하는 도중에 분명히 입력을 같게 한거 같아도 입력된 비밀번호의 값을 살펴보면 한글자 차이로 두 개의 값이 완전히 같지 않았다. 그 이유는 우선 onChange 이벤트를 통해서 비밀번호를 handle 하는 함수에서 비밀번호의 state값을 변경하는 함수를 호출하게 된다. 이런 함수가 2개가 존재하는데 비밀번호 함수와 비밀번호 확인 함수에서 유사한 일을 처리하게 된다. 리액트에서는 state를 변경하는 함수와 같은 scope에서 해당 state의 변경된 값이 바로 반영되지 않고 렌더링 이후에 값이 반영된다는 사실을 알게 되었다. 좋은 대안으로 useEffect 훅을 이용하여 dependency array에 두 비밀번호를 넣고 useEffect의 콜백 함수 안에서 값을 비교해 보았다. 두 변수 모두 렌더링 이후 제대로 된 값이 반영된 상태이므로 값을 비교했을때 별탈 없이 값을 비교할 수 있게 되었다.  

### TO DO
