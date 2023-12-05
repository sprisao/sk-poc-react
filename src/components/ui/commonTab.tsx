export default function CommonTab({
                                       activeTab, setActiveTab = (tab: string) => {
    }
                                   }: { activeTab: string, setActiveTab: (tab: string) => void }) {

    return (
        <div className="flex h-full text-sm items-end  ">
            <button
                className={`px-5 py-1 ${activeTab === 'tab1' ? 'text-white bg-blue-400 rounded-t-md  border-blue-200 ' : ''}`}
                onClick={() => setActiveTab('tab1')}>고객상담이력
            </button>
            <button
                className={`px-5 py-1 ${activeTab === 'tab2' ? 'text-white bg-blue-400 rounded-t-md  border-blue-200 ' : ''}`}
                onClick={() => setActiveTab('tab2')}>미납상담이력
            </button>
            <button
                className={`px-5 py-1 ${activeTab === 'tab3' ? 'text-white bg-blue-400 rounded-t-md  border-blue-200 ' : ''}`}
                onClick={() => setActiveTab('tab3')}>SMS전송이력
            </button>
        </div>
    );
}