import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingDown } from 'lucide-react';

const missedCallsData = [
  { month: 'Jan', before: 45, after: 8 },
  { month: 'Feb', before: 52, after: 10 },
  { month: 'Mar', before: 48, after: 9 },
  { month: 'Apr', before: 61, after: 12 },
  { month: 'May', before: 55, after: 11 },
  { month: 'Jun', before: 58, after: 10 },
];

const emailResponseData = [
  { month: 'Jan', before: 12, after: 45 },
  { month: 'Feb', before: 15, after: 52 },
  { month: 'Mar', before: 11, after: 48 },
  { month: 'Apr', before: 14, after: 58 },
  { month: 'May', before: 13, after: 55 },
  { month: 'Jun', before: 16, after: 61 },
];

const calculateChange = (data: typeof missedCallsData, isIncrease = false) => {
  const totalBefore = data.reduce((sum, item) => sum + item.before, 0);
  const totalAfter = data.reduce((sum, item) => sum + item.after, 0);
  const change = isIncrease 
    ? (((totalAfter - totalBefore) / totalBefore) * 100).toFixed(1)
    : (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1);
  return change;
};

const ResultsSection = () => {
  const missedCallsDecrease = calculateChange(missedCallsData, false);
  const emailResponseIncrease = calculateChange(emailResponseData, true);

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/20">
      <div className="content-frame">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            No Magic Box—See the Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe in tangible outcomes. Here's how our automations deliver real value.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Missed Calls Chart */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 md:p-8 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Missed Calls Analysis
              </h3>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 w-fit">
                <TrendingDown className="w-5 h-5 text-primary" />
                <span className="text-xl md:text-2xl font-bold text-primary">
                  {missedCallsDecrease}%
                </span>
                <span className="text-xs md:text-sm text-muted-foreground">decrease</span>
              </div>
            </div>

            <div className="bg-background/80 rounded-lg p-4 md:p-6 border border-border/30">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={missedCallsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis 
                    dataKey="month" 
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: '12px' }}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--foreground))'
                    }}
                  />
                  <Legend 
                    wrapperStyle={{
                      paddingTop: '20px',
                      fontSize: '12px'
                    }}
                  />
                  <Bar 
                    dataKey="before" 
                    name="Before AI Assistant" 
                    fill="hsl(var(--muted-foreground))" 
                    radius={[8, 8, 0, 0]}
                  />
                  <Bar 
                    dataKey="after" 
                    name="After AI Assistant" 
                    fill="hsl(var(--primary))" 
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <p className="text-xs md:text-sm text-muted-foreground mt-4 text-center">
              January - June 2024
            </p>
          </div>

          {/* Email Response Chart */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 md:p-8 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Email Response Rate
              </h3>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/20 w-fit">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="text-xl md:text-2xl font-bold text-accent">
                  {emailResponseIncrease}%
                </span>
                <span className="text-xs md:text-sm text-muted-foreground">increase</span>
              </div>
            </div>

            <div className="bg-background/80 rounded-lg p-4 md:p-6 border border-border/30">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={emailResponseData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis 
                    dataKey="month" 
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: '12px' }}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--foreground))'
                    }}
                  />
                  <Legend 
                    wrapperStyle={{
                      paddingTop: '20px',
                      fontSize: '12px'
                    }}
                  />
                  <Bar 
                    dataKey="before" 
                    name="Generic Emails" 
                    fill="hsl(var(--muted-foreground))" 
                    radius={[8, 8, 0, 0]}
                  />
                  <Bar 
                    dataKey="after" 
                    name="AI Personalized" 
                    fill="hsl(var(--accent))" 
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <p className="text-xs md:text-sm text-muted-foreground mt-4 text-center">
              January - June 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
