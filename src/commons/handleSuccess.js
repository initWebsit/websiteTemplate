
export default function handleSuccess({ successTip }) {
    successTip && console.log({
        message: '成功',
        description: successTip,
        duration: 2,
    })
}
