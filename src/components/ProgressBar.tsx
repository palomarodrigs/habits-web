import * as Progress from '@radix-ui/react-progress'

interface ProgressBarProps {
    progress: number
}

export function ProgressBar(props: ProgressBarProps) {
    const progressStyles = {
        width: `${props.progress}%`
    }

    return (
        <Progress.Root className='H-3 rounded-xl bg-zinc-700 w-full mt-4'>
            <Progress.Indicator
                aria-label='Progress of habits completed that day'
                aria-value={props.progress}
                className='h-3 rounded-xl bg-violet-600 transition-all'
                style={progressStyles}
            />
        </Progress.Root>
    )
}
