import React from 'react';

const Blogs = () => {
    return (
        <div className=' w-4/5 mx-auto my-5'>
            <div>
                <h3 className='text-2xl font-bold'>Question-1: What is Contex API</h3>
                <p> <span className='font-bold'>Answer:</span>  Contex api use for share data globaly. Contex api helps to share data without props. It can share data without pros drilling.</p>
                <img src="https://uploads.toptal.io/blog/image/129071/toptal-blog-image-1549323314875-d6bc9c753a4c9ac2911e8af17732023d.png" alt="" />
            </div>
            <div className=' w3/4 mx-auto'>
                <h3 className='text-2xl font-bold'>Question-2: What is Semantics Tag</h3>
                <p> <span className='font-bold'>Answer:</span> Semantics tags are meaningfull tags. A semantic element clearly describes its meaning to both the browser and the developer. </p>
                <p>Some Sematics tag:</p>
                <pre>
                    <ul className='list-disc list-inside'>
                        <li>&lt;article&gt;</li>
                        <li> &lt;aside&gt;</li>
                        <li> &lt;figure&gt</li>
                        <li> &lt;figcaptio</li>
                        <li> &lt;section&g</li>
                        <li> &lt;header&gt</li>
                        <li> &lt;footer&gt</li>
                        <li> &lt;main&gt;</li>
                        <li> &lt;mark&gt;</li>
                        <li> &lt;nav&gt;</li>
                        <li> &lt;summary&gt;</li>
                        <li> &lt;time&gt;</li>
                    </ul>
                </pre>
            </div>
            <div>
                <h3 className='text-2xl font-bold'>Question-3: Write the difference between inline and inline block element.</h3>
                <p> <span className='font-bold'>Answer:</span> </p>
                <table className="border-collapse border border-slate-400 table-fixed">
                    <caption className='table-caption'>Difference between Inline and Inline block</caption>
                    <thead>
                        <tr>
                            <th className="border border-slate-300 ...">Inline</th>
                            <th className="border border-slate-300 ...">Inline block</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-slate-300 ...">Inline doesn’t  support height width, only support margin left, right.</td>
                            <td className="border border-slate-300 ...">Inline Block supports margin, height, width.</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-300 ...">An inline element does not start on a new line.</td>
                            <td className="border border-slate-300 ...">Inline block looks like block element but it also does not start on a new line.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Blogs;