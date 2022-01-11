import './App.css';
import LinearWithValueLabel from './Progress';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function PaperCom(percentage) {

  return (
    <div>

      <div >
        {
          percentage?.percentage[1] && 
         <Paper 
          sx={{ p: '10px 16px', display: 'block', alignItems: 'center', width: 700, marginBottom: 3, marginTop: 2}}
          elevation = {0}   
        > 
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary"> Being in accordance with what is just, good, or proper. </Typography>
          </Box>
          <LinearWithValueLabel progress_val={percentage?.percentage[1]}/>
        </Paper>
        }
        
        {
          percentage?.percentage[2] && 
          <Paper 
            sx={{ p: '10px 16px', display: 'block', alignItems: 'center', width: 700, marginBottom: 3, marginTop: 2}}
            elevation = {0}   
          > 
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2" color="text.secondary"> The right-hand part, side, or direction. </Typography>
            </Box>
            <LinearWithValueLabel progress_val={percentage?.percentage[2]}/>
          </Paper>
        }

        {
          percentage?.percentage[3] &&
        <Paper 
          sx={{ p: '10px 16px', display: 'block', alignItems: 'center', width: 700, marginBottom: 3, marginTop: 2}}
          elevation = {0}   
        > 
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary">A moral or legal entitlement to have or do something (Human Right).</Typography>
          </Box>
          <LinearWithValueLabel progress_val={percentage?.percentage[3]}/>
        </Paper>
        }

      </div>
    </div>
  );
}

export default PaperCom;
