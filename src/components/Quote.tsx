import { Quote } from '../footballQuotes';

type QuoteBlockProps = {
    randomQuote: Quote
}

export default function QuoteBlock({ randomQuote }: QuoteBlockProps): JSX.Element {
    return (
        <figure className='bg-gray-100 p-8 w-1/2 m-auto rounded-md border-2 border-gray-100'>
            <blockquote className='leading-5 mb-2'>
                {randomQuote.text}
            </blockquote>
            <figcaption className='text-sm italic font-semibold'>
                &mdash; {randomQuote.author}
            </figcaption>
        </figure>
    )
}