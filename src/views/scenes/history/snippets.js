const goBackSnippet = `<button onClick={() => this.props.history.goBack()}>
  go back
</button>
`

const navigateSnippet = `<button onClick={() => this.props.history.push('/)}>
  go to home
</button>
<button onClick={() => this.props.history.push('/history')}>
  stay here
</button>
<button onClick={() => this.props.history.push('/not existing')}>
  go to not found page
</button>
`

export { goBackSnippet, navigateSnippet }
