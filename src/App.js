import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeeds';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
            height="100vh"
            projectID="075fcfdc-53fe-484a-8ccb-6fc5ca22dc75"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;