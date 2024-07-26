import Link from "next/link";

const TestOutcome = ({outcome, testId}: {outcome: string; testId: string;}) => {
console.log('outcome', outcome)
const editLink = <Link href={`/tests/${testId}/edit`}>Edit to add your results</Link>
    return (
        <div className="test-outcome">
            <h2>Test outcome</h2>
            <p>{outcome ? outcome : editLink}</p>
           
            {/* <div className="test-evidence">
            <h3>Upload evidence</h3>
                <input type="file" name="test-evidence" id="test-evidence" />
                </div> */}
        </div>
    )
}

export default TestOutcome;